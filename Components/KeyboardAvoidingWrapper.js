import { View, Text, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, keyboard } from 'react-native'
import React from 'react'
import { Keyboard } from 'react-native-web'

export default function KeyboardAvoidingWrapper({children}) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
            <TouchableWithoutFeedback onPresss={Keyboard.dismiss}>
                 {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}