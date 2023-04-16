## Introduction

Imagine having a tool that can write text, create pictures, or compose music for you. Generative AI is a tool that can do all of those things! In this lesson, we’ll explore the basics of generative AI and how it’s used in the popular tool, ChatGPT.

Generative AI refers to a type of artificial intelligence that is capable of creating new content based on its understanding of patterns and relationships in the data it has been trained on. It can generate content that resembles human-created work, making it a powerful tool for a wide range of applications.

In the case of ChatGPT, generative AI is used to create text-based responses to user input.

Generative AI is the core technology behind ChatGPT, enabling it to understand user input and generate human-like text responses to engage users in a reasonable conversation.

## 1. Training Data

Generative AI is amazing at “learning”. AI doesn’t learn the same way humans do; it analyzes data and creates connections using math. The connections it makes depend on the sort of data the AI is given. Is it good data? Is it enough data? In order to create connections, it needs lots of good-quality data.

We call this data training data. Training data can be anything from text to images to websites! It depends what sort of final output we finally want our AI to create. The more diverse and high-quality the training data, the better our AI will become at understanding and creating new content. Remember, if we put garbage data in, we’ll get garbage data out!

## 2. Encoding Training Data

To make sense of the training data, we need to translate it into a form that the AI can understand. This process is called encoding. We transform text, images, or other data into a series of vectors that the AI can process. These vectors are essentially lists upon lists of numbers.

Think of it as translating our data into a language the AI can understand

## 3. Creating a Probability Distribution

Now it’s time for the AI to train! During training, the AI looks at the encoded data and learns the underlying structure of the data to be able to generate coherent data. For instance in the case of text-based models, the training phase involves learning about word associations and co-occurrence patterns. The AI calculates the likelihood of different outcomes to create a probability distribution.

The AI starts doing math to calculate, “What is the probability of A occurring given B has already occurred?” This is commonly represented by mathematical symbols like:

P(A|B)

Depending on the type of task the algorithm needs to perform, the AI might start doing more complex math and asking more complex questions. It might start calculating, “What is the probability of A occurring given B, C, and D have already occurred?”

The probability distribution provides a complete description of the probabilities of all possible occurrences and keeps track of the relative likelihoods of each possible outcome.

The probability distribution helps the AI generate new content by choosing the most likely options

## 4. Extra Learning and Filtering

AI can also be trained and “learn” in other ways. AI can benefit from feedback and unsupervised learning.

Initial versions of ChatGPT used reinforcement learning and human feedback to do additional training. Reinforcement learning is a method that involves a rubric that “rewards” or “penalizes” the algorithm depending on the correctness of the guess. By iterative training, the AI will eventually learn to generate the correct output for the relevant task. Sometimes, a human in the loop is needed to test the outputs too. Many of these models involve human feedback to make sure the content generated is coherent and free of errors.

It might also be necessary to remove harmful or incorrect connections the AI built from training data. It’s possible that the training data had harmful biases, incorrect data, or other issues. Humans can flag these issues and try to remove these associations so they don’t show up in the AI’s eventual output.

After enough human intervention, they might feel comfortable relying more on unsupervised learning. This allows the AI to create more connections on its own without human intervention. Later versions of GPT used this method.

After this step, we have created a complete model that we can start using.

## A. User Input

To generate content, ChatGPT needs our input. Once we provide a prompt or question, ChatGPT encodes our input just like it did with the training data.

This helps ChatGPT understand our request and generate a suitable response.

## B. Generating Content

With your input encoded, ChatGPT uses the powerful GPT-# architecture to generate content. Previous models include GPT-1, GPT-2, and GPT-3.

ChatGPT uses the knowledge it has gained from its training data to generate a response. It achieves this by predicting the most likely sequences of words, phrases, or sentences that would form a suitable reply. ChatGPT bases this on the patterns and relationships it has learned from the vast amount of text data it has been trained on.

Sometimes, ChatGPT might NOT form a suitable reply. Sometimes Generative AI can hallucinate, i.e, generate new but inaccurate content. When talking about Generative AI, this can be a situation where the AI produces outputs that may not be accurate, factual, or relevant.

This can happen for a few reasons:

    1. Ambiguity in the input: If the user input is vague or unclear, ChatGPT might struggle to generate a relevant response, causing it to create content that appears to be a hallucination.
    2. Lack of specific knowledge: If ChatGPT hasn’t encountered enough relevant information about a specific topic, it might fill in gaps with incorrect or unrelated details.
    3. Limitations of the model: Although GPT-# is a powerful AI model, it’s not perfect. It may not always generate accurate, factually correct, or contextually appropriate responses, leading to hallucinations in some cases.

ChatGPT is a powerful tool, but it’s important to remember that even it can make mistakes! We should always double-check any data it gives us.

## C. Generating Content

With your input encoded, ChatGPT uses the powerful GPT-# architecture to generate content. Previous models include GPT-1, GPT-2, and GPT-3.

ChatGPT uses the knowledge it has gained from its training data to generate a response. It achieves this by predicting the most likely sequences of words, phrases, or sentences that would form a suitable reply. ChatGPT bases this on the patterns and relationships it has learned from the vast amount of text data it has been trained on.

Sometimes, ChatGPT might NOT form a suitable reply. Sometimes Generative AI can hallucinate, i.e, generate new but inaccurate content. When talking about Generative AI, this can be a situation where the AI produces outputs that may not be accurate, factual, or relevant.

This can happen for a few reasons:

    Ambiguity in the input: If the user input is vague or unclear, ChatGPT might struggle to generate a relevant response, causing it to create content that appears to be a hallucination.
    Lack of specific knowledge: If ChatGPT hasn’t encountered enough relevant information about a specific topic, it might fill in gaps with incorrect or unrelated details.
    Limitations of the model: Although GPT-# is a powerful AI model, it’s not perfect. It may not always generate accurate, factually correct, or contextually appropriate responses, leading to hallucinations in some cases.

ChatGPT is a powerful tool, but it’s important to remember that even it can make mistakes! We should always double-check any data it gives us.

## Review

We’ve learned a lot about generative AI! Let’s review the process:

    1. Collect Training Data
    2. Encode Training Data
    3. Train and Create a Probability Distribution
    4. Extra Learning & Filtering: Reinforcement Learning or Unsupervised Learning
    5. Collect and Encode User Input
    6. Generate Content
    7. Decode and Output Generated Content

With this knowledge, you’re ready to explore generative AI tools with a better understanding of how they work.
