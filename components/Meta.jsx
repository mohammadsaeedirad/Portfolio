import Head from "next/head";
import {useState} from "react"

const Meta = ({ title, description,indexed}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      <meta
        name='robots'
        content={indexed ? "index,follow" : "noindex,nofollow"}
      />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link
        rel='icon'
        href='/profile-circle.png'
      />
     <meta name="google-site-verification" content="fH4_Ao05ZMFomq3eJVrNO4R382yP959pDQMSBoYUgmE" />
    </Head>
  );
};



export default Meta;