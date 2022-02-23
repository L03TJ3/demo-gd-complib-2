import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { MyReactNativeWebAspect } from './my-react-native-web.aspect';

export class MyReactNativeWebPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactNativeWebPreviewMain = new MyReactNativeWebPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // react.registerProvider([ThemeCompositions]);

    return myReactNativeWebPreviewMain;
  }
}

MyReactNativeWebAspect.addRuntime(MyReactNativeWebPreviewMain);
