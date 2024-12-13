type Transition = {
    duration: number;
    ease?: number[];
    delay?: number;
  };
  
  const transition: Transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };
  
  interface AnimationState {
    opacity?: number;
    height?: number | string;
    filter?: string;
    y?: string | number;
    transition?: Transition;
  }
  
  interface AnimationVariants {
    initial: AnimationState;
    open?: AnimationState;
    closed?: AnimationState;
    enter?: (i: number[]) => Partial<AnimationState>; // Use Partial here to allow flexibility
    exit?: (i: number[]) => Partial<AnimationState>;
  }
  
  export const opacity: AnimationVariants = {
    initial: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { duration: 0.35 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.35 },
    },
  };
  
  export const height: AnimationVariants = {
    initial: { height: 0 },
    enter: () => ({
      height: "auto",
      transition,
    }),
    exit: () => ({
      height: 0,
      transition,
    }),
  };
  
  export const background: AnimationVariants = {
    initial: { height: 0 },
    open: {
      height: "100vh",
      transition,
    },
    closed: {
      height: 0,
      transition,
    },
  };
  
  export const blur: AnimationVariants = {
    initial: {
      filter: "blur(0px)",
      opacity: 1,
    },
    open: {
      filter: "blur(4px)",
      opacity: 0.6,
      transition: { duration: 0.3 },
    },
    closed: {
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };
  
  export const translate: AnimationVariants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    enter: (i: number[]) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }),
    exit: (i: number[]) => ({
      y: "100%",
      opacity: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    }),
  };
  