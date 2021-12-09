import React, { useState } from "react";
import { Share, Pressable, Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CtfCard = (props) => {
  const {
    navigation,
    id,
    title,
    start,
    finish,
    is_marked,
    ctftime_url,
    updateEvent,
  } = props;
  const [isMarked, setIsMarked] = useState(is_marked);

  const toggleIsMarked = (id) => {
    updateEvent(id, `is_marked=${isMarked ? 0 : 1}`);
    setIsMarked(isMarked ? 0 : 1);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.info}
        onPress={() => navigation.navigate("CtfDetail", { id: id })}
      >
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>
          {new Date(start).toDateString()} ~ {new Date(finish).toDateString()}
        </Text>
      </Pressable>
      <Pressable style={styles.mark} onPress={() => toggleIsMarked(id)}>
        <Ionicons
          name={isMarked ? "bookmark" : "bookmark-outline"}
          size={24}
          color={isMarked ? "tomato" : "gray"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  info: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  date: {
    marginTop: 8,
  },
  mark: {
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CtfCard;
