import { useEffect, useState, useContext } from 'react';
import Header from '../../../src/Header';
import Footer from '../../../src/Footer';
import { ThemeContext } from '../../../pages/_app';
import CodeBlock from '../../../src/CodeBlock'
import {Typewriter} from '../../../src/Typewriter'
export default function WakaTimeBlog() {
  const { state } = useContext(ThemeContext)
  const classStringText = "ml-10 mobile:ml-0 mr-[20%] mobile:mr-0"
  const quote=`
"We must not ignore the small daily differences we can make which, over time, 
 add up to big differences that we often cannot foresee"
 
                                           - Mariean Write Edelman (1987)
`
  const quoteMobile=`
"We must not ignore the small
daily differences we can make 
which, over time, add up to 
big differences that we often 
cannot foresee"
 
        - Mariean Write Edelman
`
  //Colosasl ascii font
  return (
    <>
      <Header />
      <div className="IndexMainContent w-screen md:w-95% pl-5 pr-5 p-1 text-lightTextPrimary dark:text-darkTextPrimary ">
        <pre className="text-[8px] mobile:text-[7px] leading-[6px] text-center font-black">{`
888       888          888           88888888888 d8b                        
888   o   888          888               888     Y8P                        
888  d8b  888          888               888                                
888 d888b 888  8888b.  888  888  8888b.  888     888 88888b.d88b.   .d88b.  
888d88888b888     "88b 888 .88P     "88b 888     888 888 "888 "88b d8P  Y8b 
88888P Y88888 .d888888 888888K  .d888888 888     888 888  888  888 88888888 
8888P   Y8888 888  888 888 "88b 888  888 888     888 888  888  888 Y8b.     
888P     Y888 "Y888888 888  888 "Y888888 888     888 888  888  888  "Y8888  
`}</pre>
        <br />
        <br />
          <Typewriter script= {quote} scriptMobile={quoteMobile} waitTime={500} className="mobile:h-[160px] desktop:h-[100px] desktop:w-[790px] desktop:mx-auto"/>
        <br />
        <br />
        <div className={classStringText}>
          <p>This software is game-changing for programmers. It allows you to share your commitment to specific technologies or simply track your own time across all development tasks.</p>
          <br />
          <p>There are three plugins you need to capture over 90% of development time, even when offline:</p>
          <br />
          <ul className="list-disc ml-[50px]">
            <li>
            Editor plugin
            </li>
            <li>
            Broswer extension
            </li>
            <li>
            Shell configuration
            </li>
          </ul>
          <br />
          <p className="text-2xl">Editor</p>
          <br />
          <p>Most of your time will likely be spent in some form of text editor or IDE. I use Neovim, a modern highly configurable clone of the classic vim. </p>
          <br />
          <p>All I had to do for Neovim was add this one line to my init.lua file. The extension is <a href="https://wakatime.com/vim">vim-wakatime</a>. Every IDE i've heard of is supported.</p>
          <br />
          <div className="w-full grid place-items-center overflow-scroll scrollbar-hide p-1">
          <CodeBlock lang="lua" hideOptions={true} text={
`require('packer').startup(function(use)
  -- Package manager
  use 'wbthomason/packer.nvim'
  -- wakatime time manager
  use 'wakatime/vim-wakatime'`
          }/>
          </div>
          <br />
          <p className="text-2xl">Broswer</p>
          <br />
          <p>This was important for me since this project has required a lot of time fiddling around in localhost and AWS. Not capturing that would be disservice to yourself. There are officially supported extensions for Chrome and Firefox. <a href="https://addons.mozilla.org/en-US/firefox/addon/wakatimes/">This is the one I personally use</a>.</p>
          <br />
          <p>By default, all web traffic will be logged as "Other". This provides no insight into your development browsing usage, so make sure to edit the extension preferences by whitelisting sites and adding custom rules.</p>
          <br />
          <div className="w-max mx-auto rounded-[10px] overflow-hidden mobile:w-[90%]"><img src="/wakarules.png"></img></div>
          <br />
          <br />
          <p className="text-2xl">Shell</p>
          <br />
          <p>The typical instalation guide for zsh did not work for me. It is a skill issue, as I have never used shell plugins before and it wasn't working correctly for me. My workaround involved adding a "precmd" to my shell config.</p>
          <br />
          <p>Simply add these lines to your ".zshrc" file:</p>
          <br />
          <div className="w-full grid place-items-center overflow-scroll scrollbar-hide p-1">
          <CodeBlock lang="lua" text={
          `custom_pre_cmd(){
  pwd > "/home/david/.config/whereami";
  ( wakatime --plugin zsh-precmd --entity-type app --project Terminal --entity $TERM  &) &> /dev/null
}
precmd_functions+=(custom_pre_cmd)`}/>
          </div>
          <br />
          <p>For Bash, you can append just the Wakatime command to your <i>PROMPT_COMMAND</i> environment variable. I also a <a href="https://github.com/rcaloras/bash-preexec">repository</a> to add precmd to Bash. This is just an option if your plugins are failing.</p>
          <br />
          <p>On another note, I save the current directory of the last command, so I can open new shells where I'm currently working. This is a very nice quality of life change.</p>
          <br />
          <br />
          <p className="text-2xl">Conclusion</p>
          <br />
          <p>There are over 400,000 accounts on Wakatime, myself and many others find it useful, so may you.</p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
