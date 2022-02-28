import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

export default function stackHeader() {
  return (
    <Appbar.Header>
        <Appbar.Content title="Title" />
    </Appbar.Header>
  )
}