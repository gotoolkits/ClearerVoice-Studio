module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/modelscope/ClearerVoice-Studio.git app"
        ],
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        path: "app",
        params: {
          venv: "env",          
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",              
        path: "app",
        message: [
          "pip install -U pip",
          "pip install -r requirements.txt",
          "pip install streamlit", // use streamlit run UI app
          "python demo.py" // download pretrained models to checkpoint folder
        ],
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "env"
      }
    }
  ]
}

