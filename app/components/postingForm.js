import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { createPosting } from '../../API/funcs'
import { useRouter } from 'expo-router'

const onSubmit = async ({ title }) => {
  await createPosting({ posting: { title } })
  // console.log('result', result)
}

const PostingForm = () => {
  const [title, setTitle] = useState('')

  const handleTitleChange = (text) => {
    setTitle(text)
  }

  const router = useRouter()
  return (
    <View>
      <TextInput
        className='border-2 rounded-md border-black h-10 m-4 p-2'
        placeholder='Title'
        type='text'
        onChangeText={handleTitleChange}
        value={title}
      />
      <TouchableOpacity
        className='rounded-full flex justify-center items-center' onPress={() => {
          onSubmit({ title })
          router.push('/Home')
        }}
      >
        <Text className='text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PostingForm
