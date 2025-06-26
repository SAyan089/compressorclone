import React from 'react'
import { open } from '@tauri-apps/plugin-shell'

import Image from '@/components/Image'
import Icon from '@/components/Icon'

function About() {
  return (
    <section className="px-4 w-full">
      <section>
        <div className="z-10 flex justify-center items-center">
          <h2 className="text-3xl mr-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            compressO
          </h2>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <p className="text-center italic text-gray-600 dark:text-gray-400 text-sm my-1">
          Compress any video to a tiny size.
        </p>
      </section>

      <section className="my-8">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm my-1">
          Powered by{' '}
          <button
            type="button"
            className="text-lg font-bold text-primary"
            onClick={() => {
              open('https://ffmpeg.org/')
            }}
          >
            FFmpeg
          </button>
          <span className="block text-sm max-w-[450px] mx-auto">
            This software uses libraries from the FFmpeg project under the
            LGPLv2.1.
          </span>
        </p>
      </section>

      <section>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm my-4">
          Developed by{' '}
          <button
            type="button"
            className="font-bold text-primary"
            onClick={() => {
              open('https://www.linkedin.com/in/syed-ayan')
            }}
          >
            Syed Ayan
          </button>
        </p>
      </section>

      <p className="self-end text-gray-400 ml-2 text-lg font-bold text-center">
        v{process.env.version}
      </p>
    </section>
  )
}

export default About
