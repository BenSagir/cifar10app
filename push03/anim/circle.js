/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, View, Easing, TouchableWithoutFeedback} from 'react-native';


export default function Circle() {
    const [animation, setAnimation] = useState(new Animated.Value(0));

    const animate = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 2000,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            animation.setValue(0);
            animate();
        });
    };

    const animateScale = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.4, 1],
    });
    const animateOpacity = animation.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [1, 0.5, 1],
    });

    const animateStyle = {
        transform: [{scale: animateScale}],
        opacity: animateOpacity,
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={animateStyle}>
                    <View style={styles.circle} />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({

    circle: {
        width: 400,
        height: 400,
        borderRadius: 300,
        position: 'absolute',
        backgroundColor: '#D9DFE6',
        top: "-10%",
        left: "-25%"
    },
});
