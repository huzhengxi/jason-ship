/**
 * Created by Tiger on 04/05/2022.
 */
import React, {PropsWithChildren} from "react";
import {CSSTransitionProps} from "react-transition-group/CSSTransition";
import {CSSTransition} from "react-transition-group";

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  wrapper?: boolean
}

const Transition: React.FC<PropsWithChildren<TransitionProps>> = (props) => {
  const {children, classNames, animation, wrapper, ...restProps} = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  wrapper: true
}

export default Transition
