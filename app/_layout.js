import { Stack, SplashScreen } from "expo-router"
import { useFonts } from "expo-font"



const Layout = () => {
  //Load the fonts
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })


  if (!fontsLoaded) {
    return <SplashScreen />
    
  }
  return <Stack />
}

export default Layout