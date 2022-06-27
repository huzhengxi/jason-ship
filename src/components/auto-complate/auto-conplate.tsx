/**
 * Created by Tiger on 11/05/2022.
 */
import {InputProps} from "../input/input";
import {FC, PropsWithChildren, ReactElement} from "react";


interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  renderOptions?: (item: DataSourceType) => ReactElement
  onSelect?: (item: DataSourceType) => ReactElement
}


export const AutoComplete: FC<PropsWithChildren<AutoCompleteProps>> = (props) => {
  const {
    fetchSuggestions,
    value,
    renderOptions,
    ...restProps
  } = props

  return <></>
}
