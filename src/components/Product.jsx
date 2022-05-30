import React, { useEffect, useState } from "react";
import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from "@chakra-ui/react";

const Product = ({ele}) => {
 console.log(ele);
return (
   
  
    <Stack data-cy="product">
      <Image data-cy="product-image" src={ele.imageSrc}/>
      <Text data-cy="product-category">{ele.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{ele.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{ele.title}</Heading>
      <Box data-cy="product-price">{ele.price}</Box>
    </Stack>
  );
};

export default Product;