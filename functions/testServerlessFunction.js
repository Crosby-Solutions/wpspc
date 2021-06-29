exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Connected and responded',
      event
    })
  }
}
