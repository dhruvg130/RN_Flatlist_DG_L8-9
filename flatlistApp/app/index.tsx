import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";

export default function Index() {

  const [selectedId, setSelectedId] = useState<string>("")

  type dataType = {
    id: string; // unique identifier
    title: string;
  }
  const DATA: dataType[] = [
    {id: "1", title:'brady stroka'},
    {id:"2", title: "Soham"},
    {id:"3", title: "Andrew Kreik"},
    {id:"4", title: "Sairam"}
  ]
  
  const selectedList = (item:dataType ) => {
    console.log("selected" + item.title)
    setSelectedId(item.id)
  }


  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}> you're cute ill show u tomorrow </Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View style = {[styles.titleContainer,
                  {
                    backgroundColor: 
                    item.id === selectedId ? colors.primary: colors.secondary
                  }
                ]}> 
                  <Text style = {[styles.titleText,
                    {color:
                      item.id === selectedId ? colors.text.light : colors.text.dark
                    }
                  ]}>{item.title}</Text>
                </View>  
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor:"magenta"
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
