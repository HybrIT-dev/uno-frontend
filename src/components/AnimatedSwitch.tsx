import React, { ReactNode } from "react";
import { Switch, useLocation } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

interface IProps {
  location: any;
  children: ReactNode;
  // any other props that come into the component
}

/**
 * This component is used to control the routing animation.
 * It controls what should happen after animation complete (onRest).
 * It differs animation direction based on routePopped props. (Set in router.action.js and available from routerReducer).
 * @param location React router location used as key in Switch
 * @param children All routes (set in Routes.js)
 * @param routePopped Used to manage direction of animation
 * @param rest All other props sent down
 */
export const AnimatedSwitch = ({ location, children, ...rest }: IProps) => {

  const reverse = location.pathname === "/";

  return (
    <PoseGroup>
      <ContextRouteAnimation key={location.pathname} reverse={reverse} className="animationRoute">
        <Switch location={location} {...rest}>
          {children}
        </Switch>
      </ContextRouteAnimation>
    </PoseGroup>
  );
};

export default AnimatedSwitch;

export const ContextRouteAnimation = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true 
  },
  exit: { 
    opacity: 0 
  },
});