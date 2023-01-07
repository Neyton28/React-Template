module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'Component name:',
      },
      {
        type: 'confirm',
        name: 'styled',
        message: 'With styled?',
        initial: true,
      },
      {
        type: 'confirm',
        name: 'storybook',
        message: 'With storybook?',
        initial: true,
      },
      {
        type: 'confirm',
        name: 'propTypes',
        message: 'With Prop types?',
        initial: true,
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { component_name, styled, storybook } = answers

      const path = `src/ui/${component_name}`

      const styledPath = styled ? `${path}/${component_name}.styled.js` : null
      const storyPath = storybook ? `.storybook/ui/${component_name}.stories.js` : null

      return { ...answers, path, styledPath, storyPath }
    })
  },
}
