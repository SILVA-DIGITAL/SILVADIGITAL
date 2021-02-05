import React, { FC, useEffect, useContext } from 'react'
import { listTalks as ListTalks } from '../../graphql/queries'
import { createTalk as CreateTalk } from '../../graphql/mutations'
import { onCreateTalk as OnCreateTalk } from '../../graphql/subscriptions'
import { API, graphqlOperation } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { TalksContext } from '~contexts/talksContext'
import { ActionTypes } from '~reducers/talksReducer'

interface Talk {
  id: number
  clientId: string
  name: string
  description: string
  speakerName: string
  speakerBio: string
  items?: Talk[]
}

interface Talks {
  [index: number]: Talk
  map: Function
}

interface ListTalks {
  listTalks: Talk
}

const Talks: FC = () => {
  const { talksContext, talksDispatch } = useContext(TalksContext)
  const { name, description, speakerBio, speakerName, talks } = talksContext
  const CLIENT_ID = uuid() as string

  useEffect(() => {
    getData()

    // @ts-ignore - Requires rxjx package for just observable typing.
    const subscription = API.graphql(graphqlOperation(OnCreateTalk)).subscribe({
      next: (eventData: any) => {
        const talk = eventData.value.data.onCreateTalk
        if (talk.clientId === CLIENT_ID) return
        talksDispatch({ type: ActionTypes.ADD_TALK, talk })
      },
    })
    return () => subscription.unsubscribe()
  }, [])

  const getData = async () => {
    try {
      const talkData = (await API.graphql(graphqlOperation(ListTalks))) as {
        data: ListTalks
      }
      talksDispatch({ type: ActionTypes.SET_TALKS, talks: talkData.data.listTalks.items })
    } catch (err) {
      console.log('error fetching talks...', err)
    }
  }

  const createTalk = async () => {
    if (name === '' || description === '' || speakerBio === '' || speakerName === '') return

    const talk = { name, description, speakerBio, speakerName, clientId: CLIENT_ID } as Talk
    const newTalks = [...talks, talk]

    talksDispatch({ type: ActionTypes.SET_TALKS, talks: newTalks })
    talksDispatch({ type: ActionTypes.CLEAR_INPUT })

    try {
      await API.graphql(graphqlOperation(CreateTalk, { input: talk }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating talk...', err)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    talksDispatch({ type: ActionTypes.SET_INPUT, key: e.target.name, value: e.target.value })
  }

  return (
    <>
      <input name="name" onChange={onChange} value={name} placeholder="name" />
      <input name="description" onChange={onChange} value={description} placeholder="description" />
      <input name="speakerName" onChange={onChange} value={speakerName} placeholder="speakerName" />
      <input name="speakerBio" onChange={onChange} value={speakerBio} placeholder="speakerBio" />
      <button onClick={createTalk}>Create Talk</button>
      {talksContext.talks.map((talk: Talk, index: number) => (
        <div key={index}>
          <h3>{talk.speakerName}</h3>
          <h5>{talk.name}</h5>
          <p>{talk.description}</p>
        </div>
      ))}
    </>
  )
}

export default Talks
