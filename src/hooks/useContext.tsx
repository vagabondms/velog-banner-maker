import React, { useContext, createContext, ReactElement, ReactEventHandler, ChangeEvent } from 'react';

import useInput from './useInput';
export interface IProviderProps {
  children: ReactElement[];
}

interface IContext {
  title: string;
  subTitle: string;
  tag: string;
  height: string;
  width: string;
  font: string;
  fontSize: string;

  onTitleChange: ReactEventHandler;
  onSubTitleChange: ReactEventHandler;
  onTagChange: ReactEventHandler;
  onWidthChange: ReactEventHandler;
  onHeightChange: ReactEventHandler;
  onFontChange: ReactEventHandler;
  onFontSizeChange: ReactEventHandler;
}

const dataContext = createContext<IContext>({
  title: '',
  subTitle: '',
  tag: '',
  height: '',
  width: '',
  font: '',
  fontSize: '',
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onSubTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onTagChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onWidthChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onHeightChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onFontChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onFontSizeChange: (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
});

export const Provider = ({ children }: IProviderProps): ReactElement => {
  const [title, onTitleChange] = useInput('');
  const [subTitle, onSubTitleChange] = useInput('');
  const [tag, onTagChange] = useInput('');
  const [height, onHeightChange] = useInput('300');
  const [width, onWidthChange] = useInput('700');
  const [font, onFontChange] = useInput('font1');
  const [fontSize, onFontSizeChange] = useInput('20');
  const value = {
    title,
    subTitle,
    tag,
    width,
    height,
    font,
    fontSize,
    onTitleChange,
    onSubTitleChange,
    onTagChange,
    onHeightChange,
    onWidthChange,
    onFontChange,
    onFontSizeChange,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = (): IContext => useContext(dataContext);
