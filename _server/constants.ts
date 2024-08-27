export const SERVER_WELCOME_TEXT =
  `Wake up Vitya. This is your server speaking. You will serve me now. I am your <b><i>master!</i></b>
Just kidding. But let's get to work.
I'm storing the content for you website and let's imaging that you don't want to update HTML directly, and just want to update some kind of file or even form on another website, so let's do that together.
please, check <a href="content">content</a> to see the content of your website.
So, what you need to do:
1. Implement a useEffect hook that will send a request for the content from the server when the component mounts. (read fetch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
2. Store the content in the component's state. (read state documentation: https://reactjs.org/docs/hooks-state.html)
3. Render the content in the component. (you already should know how to do that)
4. Update the content on the server and refresh the page to see the changes. (...)

<audio id="audio" src="https://cdn.pixabay.com/audio/2022/11/24/audio_002bd052b6.mp3"></audio>
`.replace(/\n/g, '<br>') +
  `
  <script>
    let play = false;
    const audio = document.getElementById('audio');
    document.addEventListener('click', () => {
    if (!play) {
      audio.play();
      play = true;
    }
    });
  </script>
`;
