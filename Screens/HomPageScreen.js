import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Cards } from "../mock/Cards";
import { PopularCards } from "../mock/PopularCards";

export default function HomePageScreen({ route }) {
  //function to watch the inputed values
  const { name, email } = route.params;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.main}>
        <View style={style.header}>
          <View>
            <Text style={style.name}>Welcome,{name} </Text>
            <Text style={style.email}>{email} </Text>
          </View>

          <View style={style.avatarContainer}>
            <Image style={style.avatar} source={require("../assets/profile.png")} />
            <View style={style.insetRadio} />
          </View>
        </View>

        <View style={style.filtering}>
          <View style={style.searchContainer}>
            <Image
              style={style.searchIcon}
              source={require("../assets/icons8-search-64.png")}
            />
            <TextInput
              style={style.searchInput}
              placeholder="Search a job or position"
            />
          </View>
          <TouchableOpacity style={style.filterContainer}>
            <Image
              style={style.filter}
              source={require("../assets/filter5.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={style.featured}>
          <View style={style.featuredText}>
            <Text style={style.featuredTitle}>Featured Jobs</Text>
            <Text style={style.seeAll}>See all</Text>
          </View>

          <FlatList
            style={style.featuredList}
            data={Cards}
            renderItem={({ item }) => (
              <View style={[style.card, { backgroundColor: item.color }]}>
                <View style={style.cardContent}>
                  <View style={style.imageContainer}>
                    <Image source={item.image} style={style.cardImage} />
                  </View>

                  <View style={style.cardText}>
                    <Text style={style.cardTitle}>{item.title}</Text>
                    <Text style={style.cardsubText}>{item.text}</Text>
                  </View>
                </View>
                <View style={style.cardSalaryCotainer}>
                  <View>
                    <Text style={style.cardDescription}>
                      {item.description}
                    </Text>
                    <Text style={style.cardSalary}>${item.salary}</Text>
                  </View>

                  <Text style={style.cardLocation}>{item.location}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <View style={style.featuredText}>
            <Text style={style.featuredTitle}>Popular Jobs</Text>
            <Text style={style.seeAll}>See all</Text>
          </View>

          <FlatList
            data={PopularCards}
            renderItem={({ item }) => (
              <View style={style.popularCard}>
                <View style={style.popularCardContent}>
                  <Image style={style.popularCardImage} source={item.image} />
                  <View>
                    <Text style={style.popularCardTitle}>{item.title}</Text>
                    <Text style={style.popularCardsubText}>{item.text}</Text>
                  </View>
                </View>

                <View>
                  <Text style={style.popularCardSalary}>${item.salary}/y</Text>
                  <Text style={style.popularCardLocation}>{item.location}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },

  main: {
    flex: 1,
    padding: 20,
    gap: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  name: {
    fontSize: 24,
    color: "#0D0D26",
    fontWeight: "700",
  },

  email: {
    fontSize: 14,
    color: "#95969D",
    fontWeight: "400",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  insetRadio: {
    backgroundColor: "red",
    height: 8,
    width: 8,
    borderRadius: 100,
    padding: 2,
    position: "absolute",
    right: 1,
    top: 4,
    inset: 0,
  },

  filtering: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  searchContainer: {
    width: 300,
    flexDirection: "row",
    borderWidth: 0,
    backgroundColor: "#F2F2F3",
    padding: 10,
    gap: 10,
    height: 48,
    alignItems: "center",
    borderRadius: 10,
  },

  searchInput: {
    width: 250,
    height: 48,
    alignItems: "center",
    borderRadius: 10,
  },

  searchIcon: {
    height: 20,
    width: 20,
    fontWeight: "700",
  },

  filterContainer: {
    backgroundColor: "#F2F2F3",
    padding: 10,
    width: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  featuredTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.8,
    color: "#0D0D26",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.8,
    color: "#95969D",
  },
  card: {
    marginRight: 20,
    padding: 15,
    width: 300,
    height: 186,
    borderRadius: 24,
    opacity: 6,
    marginTop: 20,
    justifyContent: "space-between",
    zIndex: -100,
  },

  cardContent: {
    flexDirection: "row",
    gap: 10,
  },

  imageContainer: {
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    padding: 10,
    height: 46,
    width: 46,
  },

  cardImage: {
    height: 23.57,
    width: 22,
  },

  cardText: {
    flexDirection: "column",
    gap: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.6,
    color: "#FFFFFF",
  },
  cardsubText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#FFFFFF",
  },

  cardDescription: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
    color: "#FFFFFF",
  },

  cardSalaryCotainer: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  cardSalary: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
    color: "#FFFFFF",
  },
  cardLocation: {
    fontSize: 15,
    fontWeight: 500,
    color: "#FFFFFF",
    lineHeight: 24,
    opacity: 0.6,
  },

  popularCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    height: 80,
    padding: 15,
    borderRadius: 20,
  },

  popularCardContent: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  popularCardImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },

  popularCardText: {
    flexDirection: "column",
    gap: 5,
  },
  popularCardTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20.6,
    color: "#0D0D26",
  },
  popularCardsubText: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 21,
    color: "#95969D",
  },
  popularCardSalary: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
    color: "#0D0D26",
  },
  popularCardLocation: {
    fontSize: 15,
    fontWeight: 500,
    color: "#95969D",
    lineHeight: 24,
    opacity: 0.6,
  },
});
