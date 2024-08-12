import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const NewsStyle = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#add8e6',
    },
    loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87ceeb', // เปลี่ยนสีพื้นหลังให้เป็นฟ้าอ่อน
    },
    errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    },
    errorText: {
    fontSize: 18,
    color: 'red',
    },
    dateText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
    },
    cityName: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
    },
    temp: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#ff6347',
        },
        weatherMain: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#fff',
        },
        weatherDescription: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 16,
        color: '#fff',
        },
        details: {
        marginTop: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        },
        detail: {
        fontSize: 18,
        marginBottom: 4,
        color: '#333',
        },
        });    
        

export default NewsStyle

