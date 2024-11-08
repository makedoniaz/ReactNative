import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#B3B68B');
  const [isFocus, setIsFocus] = useState(false);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const colors = [
    { value: '#B3B68B' },
    { value: '#7E7D4F' },
    { value: '#CFA56A' },
    { value: '#B8A883' },
  ];

  const availableColors = colors.filter(color => color.value !== selectedColor);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.headerButton}>
            <Image source={require('./assets/images/arrowleft2.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.headerButton}>
            <Image source={require('./assets/images/heart.png')} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.imageContainer} horizontal={true}>
        <Image source={require('./assets/images/3.png')} style={[styles.productImage, styles.marginRight]} />
        <Image source={require('./assets/images/2.png')} style={[styles.productImage, styles.marginRight]} />
        <Image source={require('./assets/images/1.png')} style={styles.productImage} />
      </ScrollView>

      <View style={styles.productInfo}>
        <Text style={styles.title}>Men's Harrington Jacket</Text>
        <Text style={styles.price}>$148</Text>
      </View>

      <View style={styles.optionsContainer}>
        <View style={[styles.option, styles.marginBottom]}>
          <View>
            <Text>Size</Text>
          </View>
          <View style={styles.optionRight}>
            <Text style={styles.optionText}>S</Text>
            <TouchableOpacity>
              <View>
                <Image source={require('./assets/images/arrowdown2.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.option, styles.marginBottom]}>
          <View>
            <Text>Color</Text>
          </View>
          <View style={styles.optionRight}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              data={availableColors}
              valueField="value"
              value={selectedColor}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelectedColor(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <View style={[styles.colorCircle, { backgroundColor: selectedColor }]} />
              )}
              renderItem={item => (
                <View style={[styles.colorCircle, { backgroundColor: item.value }, styles.colorItem]} />
              )}
              renderRightIcon={() => (
                <Image source={require('./assets/images/arrowdown2.png')} />
              )}
              flatListProps={{
                style: { maxHeight: 150 },
              }}
            />
          </View>
        </View>

        <View style={styles.option}>
          <Text>Quantity</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <View>
                <Image source={require('./assets/images/add.png')} />
              </View>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <View>
                <Image source={require('./assets/images/minus.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.description}>
          Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy keeps it casual and timeless.
        </Text>
      </View>

      <View style={styles.addToBagContainer}>
        <TouchableOpacity style={styles.addToBagButton}>
          <View><Text style={styles.addToBagPrice}>$148</Text></View>
          <View><Text style={styles.addToBagText}>Add to Bag</Text></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#272727',
    padding: 24,
  },
  gabarito: {
    fontFamily: 'Gabarito-Bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerButton: {
    backgroundColor: '#F4F4F4',
    borderRadius: 100,
    padding: 12,
  },
  favoriteButton: {
    fontSize: 24,
  },
  imageContainer: {
    marginBottom: 24,
  },
  productImage: {
    width: 161,
    height: 248,
  },
  marginRight: {
    marginRight: 10,
  },
  marginBottom: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Gabarito-Bold',
    marginBottom: 15,
  },
  price: {
    fontSize: 16,
    color: '#8E6CEF',
    marginBottom: 33,
    fontFamily: 'Gabarito-Bold',
  },
  optionsContainer: {
    marginBottom: 26,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 100,
    fontSize: 16,
    fontWeight: 450,
    maxHeight: 56,
    paddingVertical: 16,
    paddingRight: 22,
    paddingLeft: 16,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginRight: 29,
    fontWeight: 'bold',
    fontFamily: 'Gabarito-Bold',
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    marginRight: 25,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 110,
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8E6CEF',
    borderRadius: 15,
  },
  description: {
    fontSize: 14,
    color: '#7d7d7d',
    marginBottom: 16,
  },
  addToBagButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#8E6CEF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: 'center',
  },
  addToBagText: {
    color: '#fff',
    fontWeight: '450',
    fontSize: 16,
  },
  addToBagPrice: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  colorItem: {
    marginHorizontal: 'auto',
    marginVertical: 10,
  },
});

export default ProductPage;