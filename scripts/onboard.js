module.exports = (robot) => {
    robot.enter((res) => {
        res.reply(`
        Welcome aboard!
        Line1
        Line2
        `)
    })
  }

  //received msg text = res.message.text
  // user name when joined to channel = res.message.user.name