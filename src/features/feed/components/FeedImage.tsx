import React from "react";
import {FlatList, ScrollView} from "react-native";
import styled from "styled-components/native";
import {Box} from "../../../ds/Box";
import {CustomText} from "../../../ds/CustomText";
import {ImageEndpoint} from "../../../services";
import {FeedItem} from "./FeedItem";

type FeedImageProps = {
  images: ImageEndpoint[];
  title: string;
  onEndReached: (arg: {distanceFromEnd: number}) => void;
};

export const FeedImage = ({images, title, onEndReached}: FeedImageProps) => {
  return (
    <>
      <Box>
        <FlatList
          onEndReached={onEndReached}
          data={images}
          ListHeaderComponent={() => (
            <CustomText variant="large">{title}</CustomText>
          )}
          ListFooterComponent={() => (
            <CustomText variant="large">Carregando</CustomText>
          )}
          style={{height: 320}}
          numColumns={2}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({item}) => {
            return <FeedItem imageUrl={item.urls.full} />;
          }}
        />
        {/* <Box width="100%" marginTop={3} flexDirection="row" flexWrap="wrap">
          {images.map((image) => {
            return <FeedItem key={image.id} imageUrl={image.urls.full} />;
          })}
        </Box> */}
      </Box>
    </>
  );
};
