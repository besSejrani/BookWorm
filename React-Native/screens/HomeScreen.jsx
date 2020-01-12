import React, { Component } from "react";
import { TextInput, Text, View, SafeAreaView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BookCount from "../components/BookCount";
import CusttomActionButton from "../components/CustomButton";

class HomeScreen extends Component {
  state = {
    totalCount: 0,
    readingCount: 0,
    readCount: 0,
    isAddNewBookVisible: false,
    textInputData: "",
    books: []
  };

  /**
   * Show user input for adding book
   */
  showAddNewBook = () => {
    this.setState({
      isAddNewBookVisible: true
    });
  };

  /**
   * Hide book
   */
  hideAddBook = () => {
    this.setState({
      isAddNewBookVisible: false
    });
  };

  /**
   * Add book
   */
  addBook = book => {
    if (this.state.textInputData.length >= 1) {
      this.setState(
        prevState => ({
          books: [...prevState.books, book],
          totalCount: prevState.totalCount + 1,
          readingCount: prevState.readingCount + 1,
          textInputData: ""
        }),
        () => {}
      );
    }
  };

  /**
   * Filter the readen books
   */
  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter(book => book !== selectedBook);

    this.setState(prevState => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1
    }));
  };

  renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: "row", flex: 1, justifyContent: "space-between", marginVertical: 5 }}>
      <Text>{item}</Text>

      <CusttomActionButton
        style={{ backgroundColor: "#a5deba", width: 100 }}
        onPress={() => this.markAsRead(item, index)}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Mark as read</Text>
      </CusttomActionButton>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, margin: 10 }}>
        <SafeAreaView
          style={{
            height: 80,
            borderBottomWidth: 0.5,
            borderBottomColor: "#e9e9e9",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 24 }}>Book Worm</Text>
        </SafeAreaView>

        <View style={{ flex: 1 }}>
          {this.state.isAddNewBookVisible && (
            <View style={{ height: 50, flexDirection: "row", marginBottom: 5 }}>
              <TextInput
                onChangeText={book => this.setState({ textInputData: book })}
                style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
                placeholder="Enter Book Name"
                placeholderTextColor="grey"
              ></TextInput>

              <CusttomActionButton
                style={{ backgroundColor: "#a5deba" }}
                onPress={() => this.addBook(this.state.textInputData)}
              >
                <Ionicons name="ios-checkmark" color="white" size={40} />
              </CusttomActionButton>

              <CusttomActionButton onPress={this.hideAddBook}>
                <Ionicons name="ios-close" color="white" size={40} />
              </CusttomActionButton>
            </View>
          )}

          <FlatList
            data={this.state.books}
            ListEmptyComponent={
              <View style={{ marginTop: 50, alignItems: "center" }}>
                <Text>Not reading any books</Text>
              </View>
            }
            renderItem={({ item }, index) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>

          <CusttomActionButton
            position="right"
            onPress={this.showAddNewBook}
            style={{ backgroundColor: "#44b3ef", borderRadius: 99 }}
          >
            <Text style={{ color: "#fff", fontSize: 30 }}>+</Text>
          </CusttomActionButton>
        </View>

        <View style={{ height: 80, borderTopWidth: 0.5, borderTopColor: "#e9e9e9", flexDirection: "row" }}>
          <BookCount count={this.state.totalCount} title="Total" />
          <BookCount count={this.state.readingCount} title="ReadingCount" />
          <BookCount count={this.state.readCount} title="Read" />
        </View>
        <SafeAreaView></SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
