/**
 * Created by Tiger on 28/04/2022.
 */
import React, {PropsWithChildren} from "react";

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}


const SubMenu: React.FC<PropsWithChildren<SubMenuProps>> = ({}) => {
  return <h1></h1>
}


export default SubMenu

