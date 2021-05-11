#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const ejs = require('ejs')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Project name?',
  }
])
.then(anwsers=>{
  // 模板目录
  const tmplDir = path.join(__dirname, 'templates')
  // 目标目录
  const destDir = process.cwd()

  // 把模板目录文件转到目标目录
  fs.readdir(tmplDir, (err, files)=>{
    if(err) throw err
    files.forEach(file=>{
      // 使用模板引擎渲染文件
      ejs.renderFile(path.join(tmplDir, file), anwsers, (err, result)=>{
        if(err) throw err
        console.log(result)
        // 将结果写入目标文件路径
        fs.writeFileSync(path.join(destDir, file), result)
      })
    })
  })
})