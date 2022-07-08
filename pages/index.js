import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Employee, { EOM } from './eom';

export default function Home() {
  return (
    <div className="page-container">
      <h1>When are we gonna see the light of our lives?</h1>
      <EOM /> 
    </div>
  )
}
