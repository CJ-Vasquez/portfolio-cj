import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type { ReactNode } from 'react';

// Tipos para el estado global
interface PortfolioState {
  activeSection: string;
  isLoading: boolean;
  animations: {
    reduceMotion: boolean;
    particlesEnabled: boolean;
    holographicEnabled: boolean;
    parallaxEnabled: boolean;
  };
  performance: {
    fps: number;
    renderTime: number;
    isOptimized: boolean;
  };
  ui: {
    showPerformanceMonitor: boolean;
    sidebarOpen: boolean;
  };
}

// Tipos para las acciones
type PortfolioAction =
  | { type: 'SET_ACTIVE_SECTION'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'TOGGLE_ANIMATIONS'; payload: Partial<PortfolioState['animations']> }
  | { type: 'UPDATE_PERFORMANCE'; payload: Partial<PortfolioState['performance']> }
  | { type: 'TOGGLE_UI'; payload: Partial<PortfolioState['ui']> };

// Estado inicial
const initialState: PortfolioState = {
  activeSection: 'hero',
  isLoading: false,
  animations: {
    reduceMotion: false,
    particlesEnabled: true,
    holographicEnabled: true,
    parallaxEnabled: true,
  },
  performance: {
    fps: 60,
    renderTime: 0,
    isOptimized: false,
  },
  ui: {
    showPerformanceMonitor: false,
    sidebarOpen: false,
  },
};

// Reducer
function portfolioReducer(state: PortfolioState, action: PortfolioAction): PortfolioState {
  switch (action.type) {
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'TOGGLE_ANIMATIONS':
      return {
        ...state,
        animations: { ...state.animations, ...action.payload },
      };
    
    case 'UPDATE_PERFORMANCE':
      return {
        ...state,
        performance: { ...state.performance, ...action.payload },
      };
    
    case 'TOGGLE_UI':
      return {
        ...state,
        ui: { ...state.ui, ...action.payload },
      };
    
    default:
      return state;
  }
}

// Context
interface PortfolioContextType {
  state: PortfolioState;
  dispatch: React.Dispatch<PortfolioAction>;
  actions: {
    setActiveSection: (section: string) => void;
    setLoading: (loading: boolean) => void;
    toggleAnimations: (animations: Partial<PortfolioState['animations']>) => void;
    updatePerformance: (performance: Partial<PortfolioState['performance']>) => void;
    toggleUI: (ui: Partial<PortfolioState['ui']>) => void;
  };
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Provider component
interface PortfolioProviderProps {
  children: ReactNode;
}

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  // Action creators memoizados
  const actions = {
    setActiveSection: useCallback((section: string) => {
      dispatch({ type: 'SET_ACTIVE_SECTION', payload: section });
    }, []),

    setLoading: useCallback((loading: boolean) => {
      dispatch({ type: 'SET_LOADING', payload: loading });
    }, []),

    toggleAnimations: useCallback((animations: Partial<PortfolioState['animations']>) => {
      dispatch({ type: 'TOGGLE_ANIMATIONS', payload: animations });
      localStorage.setItem('portfolio-animations', JSON.stringify(animations));
    }, []),

    updatePerformance: useCallback((performance: Partial<PortfolioState['performance']>) => {
      dispatch({ type: 'UPDATE_PERFORMANCE', payload: performance });
      
      // Auto-optimize if performance is poor
      if (performance.fps !== undefined && performance.fps < 30 && !state.performance.isOptimized) {
        dispatch({ 
          type: 'TOGGLE_ANIMATIONS', 
          payload: { 
            particlesEnabled: false, 
            holographicEnabled: false,
            parallaxEnabled: false 
          } 
        });
        dispatch({ 
          type: 'UPDATE_PERFORMANCE', 
          payload: { isOptimized: true } 
        });
      } else if (performance.fps !== undefined && performance.fps > 50 && state.performance.isOptimized) {
        dispatch({ 
          type: 'TOGGLE_ANIMATIONS', 
          payload: { 
            particlesEnabled: true, 
            holographicEnabled: true,
            parallaxEnabled: true 
          } 
        });
        dispatch({ 
          type: 'UPDATE_PERFORMANCE', 
          payload: { isOptimized: false } 
        });
      }
    }, [state.performance.isOptimized]),

    toggleUI: useCallback((ui: Partial<PortfolioState['ui']>) => {
      dispatch({ type: 'TOGGLE_UI', payload: ui });
    }, []),
  };

  return (
    <PortfolioContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </PortfolioContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

// Hook para inicialización de efectos
export function usePortfolioInit() {
  const { actions } = usePortfolio();

  React.useEffect(() => {
    // Load saved preferences
    const savedAnimations = localStorage.getItem('portfolio-animations');

    if (savedAnimations) {
      try {
        const parsedAnimations = JSON.parse(savedAnimations);
        actions.toggleAnimations(parsedAnimations);
      } catch (error) {
        console.warn('Failed to parse saved animations:', error);
      }
    }

    // Check for reduced motion preference
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      actions.toggleAnimations({ reduceMotion: true });
    }
  }, [actions]);
}