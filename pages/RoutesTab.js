import {MaterialCommunityIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 

import Home from './Home';
import Rebeldes from './Rebeldes';
import ImperioStack from './ImperioStack';
import Planetas from './Planetas';

const Tab = createBottomTabNavigator();

export default function RoutesTab(){
return(
 <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor:"#0001"}}>

   <Tab.Screen name="Home" component={Home} options={{tabBarLabel:'Home', tabBarIcon: 
({color,size})=> (<MaterialCommunityIcons name="magazine-pistol" color={color} size={size} />) }}/>

   <Tab.Screen name="Rebeldes" component={Rebeldes} options={{tabBarLabel:'Filmes', tabBarIcon: 
({color,size})=> (<MaterialCommunityIcons name="sword-cross" color={color} size={size} />) }}/>

   <Tab.Screen name="Planetas" component={Planetas} options={{tabBarLabel:'Planetas', 
tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="death-star" color={color} size={size} />) }}/> 

   <Tab.Screen name="Imperio" component={ImperioStack} options={{tabBarLabel:'Personagens', 
tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="death-star" color={color} size={size}/>) 

   }}/>
    </Tab.Navigator>
  )
}

