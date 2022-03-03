import { PreviewRuntime } from '@teambit/preview';
import { ReactNativeAspect, ReactNativePreview } from '@teambit/react-native';
// create your theme and import it here
// import { ThemeCompositions } from '@my-company/my-scope.theme.theme-compositions';
import { NewReactNativeExtendedAspect } from './new-react-native-extended.aspect';

export class NewReactNativeExtendedPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactNativeAspect];

  static async provider([reactNative]: [ReactNativePreview]) {
    const newReactNativeExtendedPreviewMain = new NewReactNativeExtendedPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // reactNative.registerProvider([ThemeCompositions]);

    return newReactNativeExtendedPreviewMain;
  }
}

NewReactNativeExtendedAspect.addRuntime(NewReactNativeExtendedPreviewMain);
