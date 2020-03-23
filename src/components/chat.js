import React from "react"
import { Chat, HeroCard } from "@progress/kendo-react-conversational-ui"
import { ApiAiClient } from "api-ai-javascript"

import "./chat.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    this.client = new ApiAiClient({
      accessToken: "ce195d612e8e4b8287a53b0f49ce70b6",
    })
    this.client.eventRequest("Welcome").then(this.onResponse, this)
    this.user = {
      id: 1,
      name: "You",
    }
    this.bot = {
      id: "botty",
      name: "Assessment bot",
      avatarUrl:
        "https://demos.telerik.com/kendo-ui/content/chat/InsuranceBot.png",
    }
    this.addNewMessage = this.addNewMessage.bind(this)
  }

  parseActions = actions => {
    if (actions !== undefined) {
      actions.map(action => {
        if (action.type === "postBack") {
          action.type = "reply"
        }
      })
      return actions
    }
    return []
  }

  parseText = event => {
    if (event.action !== undefined) {
      return event.action.value
    } else if (event.value) {
      return event.value
    } else {
      return event.message.text
    }
  }

  onResponse = activity => {
    let that = this
    activity.result.fulfillment.messages.forEach(function(element) {
      let newMessage
      if (element.speech) {
        let dividedM = element.speech.split("\n")
        dividedM.forEach(string => {
          newMessage = {
            text: string,
            author: that.bot,
            timestamp: new Date(activity.timestamp),
            suggestedActions: element.replies
              ? element.replies.map(x => {
                  return { type: "reply", title: x, value: x }
                })
              : [],
          }
          that.setState(prevState => {
            return { messages: [...prevState.messages, newMessage] }
          })
        })
      } else {
        newMessage = {
          text: "",
          author: that.bot,
          timestamp: new Date(activity.timestamp),
          suggestedActions: element.payload.metadata.payload
            ? that.parseActions(element.payload.metadata.payload)
            : [],
        }
        that.setState(prevState => {
          return { messages: [...prevState.messages, newMessage] }
        })
      }
    })
  }

  addNewMessage = event => {
    let value = this.parseText(event)
    this.client.textRequest(value.toString()).then(this.onResponse, this)
    if (!event.value) {
      this.setState(prevState => {
        return {
          messages: [
            ...prevState.messages,
            { author: this.user, text: value, timestamp: new Date() },
          ],
        }
      })
    }
  }

  render() {
    return (
      <Chat
        messages={this.state.messages}
        user={this.user}
        onMessageSend={this.addNewMessage}
      />
    )
  }
}

export default App
