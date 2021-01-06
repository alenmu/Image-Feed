import { SafeAreaView, Platform, StyleSheet, Constants } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import NavigationBar from "../components/NavigationBar";

export default function Comments({
  style,
  comments,
  onClose,
  onSubmitComment,
}) {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
}
Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
};
Comments.defaultProps = { style: null };

const styles = StyleSheet.create({
  comments: {
    flex: 1,
  },
});
