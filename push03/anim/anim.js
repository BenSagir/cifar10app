/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Animated, View, Image, Easing, TouchableWithoutFeedback} from 'react-native';

var num_of_star = 3;

export default function Star({value}) {
    const [rateing, setRateing] = useState(0);
    const [animation, setAnimation] = useState(new Animated.Value(1));

    const rate = star => {
        setRateing(star);
    };
    const animate = () => {
        Animated.timing(animation, {
            toValue: 2,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            animation.setValue(1);
        });
    };

    function operate(x) {
        rate(x);
        animate();
    }
    let stars = [];

    const animateScale = animation.interpolate({
        inputRange: [1, 1.5, 2],
        outputRange: [1, 1.4, 1],
    });
    const animateOpacity = animation.interpolate({
        inputRange: [1, 1.2, 2],
        outputRange: [1, 0.5, 1],
    });
    const animateWobble = animation.interpolate({
        inputRange: [1, 1.25, 1.75, 2],
        outputRange: ['0deg', '-3deg', '3deg', '0deg'],
    });

    const animateStyle = {
        transform: [{scale: animateScale}, {rotate: animateWobble}],
        opacity: animateOpacity
    };
    for (let x = 1; x <= num_of_star; x++) {
        stars.push(
            <TouchableWithoutFeedback key={x} onPress={() => {}}>
                <Animated.View style={x <= rateing ? animateStyle : ''}>
                    <Single filled={x <= rateing ? true : false} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
    function Single({filled}) {

        return (
            <View>
                <Image source={filled ? require('./star2.png') : require('./star1.png')} style={styles.img} />
            </View>
        )
    }

    useEffect(() => {
        let curr = 0;
        const timer = setTimeout(() => {
            if (value >= curr) operate(curr);
            curr++;
            setTimeout(() => {
                if (value >= curr) operate(curr);
                curr++;
                setTimeout(() => {
                    if (value >= curr) operate(curr);
                    curr++;
                    setTimeout(() => {
                        if (value >= curr) operate(curr);
                        curr++;
                    }, 500);
                }, 500);
            }, 500);
        }, 500);


        return () => clearTimeout(timer);
    }, []);

    return (
        <View>
            <View style={{flexDirection: 'row'}}>{stars}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: Dimensions.get('screen').width * 20 / 100,
        height: Dimensions.get('screen').width * 20 / 100,
        margin: 5,
    },
});