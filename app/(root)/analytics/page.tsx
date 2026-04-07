import { MikiriCard } from '@/components/ui/mikiri/mikiri-card'
import React from 'react'

const Analytics = () => {
    return (<>
        <div className='kanji-overlay' />
        <div className='px-50 w-full'>
            <h1>Immersion Insights</h1>
            <h2>Your Japanese journey, visualized.</h2>
            <div className='grid grid-cols-4'>
                <MikiriCard>34,280
                    Characters Read
                    This week</MikiriCard>
                <MikiriCard>34,280
                    Characters Read
                    This week</MikiriCard>
                <MikiriCard>47
                    Texts Read
                    8 this month</MikiriCard>
                <MikiriCard>142 Words Mined To Anki this month</MikiriCard>
            </div>

            {/* Reading Activity */}
            <h1>Reading Activity</h1>
            <h2>Track your daily reading progress and patterns</h2>
            <section className='flex flex-col'>
                <div className='grid grid-cols-2'>
                    <MikiriCard>weekly reading</MikiriCard>
                    <MikiriCard>30-day coverage evolution</MikiriCard>
                </div>
                <div>
                    <MikiriCard>
                        90-day reading heatmap
                    </MikiriCard>
                </div>
            </section>
            <br />

            {/* Streak & Consistency */}
            <h1>Streak & Consistency</h1>
            <h2>Your reading habit over time</h2>
            <section className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <MikiriCard className='h-full'>60-Day Activity</MikiriCard>
                </div>
                <div>
                    <MikiriCard>Current streak</MikiriCard>
                    <MikiriCard>
                        Streak data
                    </MikiriCard>
                </div>
            </section>
            <br />

            {/* Library Overview */}
            <h1>Library Overview</h1>
            <h2>All your imported texts and their reading status</h2>
            <section className='grid'>
                <MikiriCard>
                    Library table
                </MikiriCard>
            </section>

            {/* Goals Progress */}
            <h1>Goals Progress</h1>
            <h2>Track and manage your learning targets</h2>
            <section className='flex'>
                <div className='grid grid-cols-3 w-full'>
                    <MikiriCard>Daily reading</MikiriCard>
                    <MikiriCard>Weekly Coverage</MikiriCard>
                    <MikiriCard>Anki Mining</MikiriCard>
                </div>
            </section>
            <br />

            {/* Vocabulary Mastery */}
            <h1>Vocabulary Mastery</h1>
            <h2>Kanji, Grammar and estimated JLPT level</h2>
            <section className='flex'>
                <div className='grid grid-cols-3 w-full'>
                    <MikiriCard>Estimated Level</MikiriCard>
                    <MikiriCard>Kanji Knowledge</MikiriCard>
                    <MikiriCard>Grammar Points</MikiriCard>
                </div>
            </section>
            <br />

            {/* Top Unknown Words */}
            <h1>Top Unknown Words</h1>
            <h2>Words you encounter the most but haven&apos;t learned yet</h2>
            <section className='flex'>
                <div className='grid grid-cols-4 w-full'>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                    <MikiriCard>Word</MikiriCard>
                </div>
            </section>
            <br />

            {/* Mining Efficiency */}
            <h1>Mining Efficiency</h1>
            <h2>How effectively you are acquiring new vocabulary</h2>
            <section className='flex w-full flex-col'>
                <div className='w-full grid grid-cols-4 gap-8'>
                    <MikiriCard>Words per hour</MikiriCard>
                    <MikiriCard>Best mining day</MikiriCard>
                    <MikiriCard>Retention Rate</MikiriCard>
                    <MikiriCard>Total Words mined</MikiriCard>
                </div>
                <div>
                    <MikiriCard>
                        Mining vs Retention
                    </MikiriCard>
                </div>
            </section>
            <br />

            {/* Time spent learning */}
            <h1>Time spent learning</h1>
            <h2>Session lengths and total reading time</h2>
            <section className='grid grid-cols-2'>
                <div>
                    <MikiriCard className='h-full'>Time this week</MikiriCard>
                </div>
                <div className='grid grid-cols-2 grid-rows-2'>
                    <MikiriCard>Total hours</MikiriCard>
                    <MikiriCard>Avg Session (min)</MikiriCard>
                    <MikiriCard>Longest (min)</MikiriCard>
                    <MikiriCard>Sessions (week)</MikiriCard>
                </div>
            </section>
            <br />

            {/* Integrations */}
            <h1>Integrations</h1>
            <h2>Connected services and sync status</h2>
            <section className='flex w-full'>
                <div className='grid grid-cols-5 w-full'>
                    <MikiriCard>Integration</MikiriCard>
                    <MikiriCard>Integration</MikiriCard>
                    <MikiriCard>Integration</MikiriCard>
                    <MikiriCard>Integration</MikiriCard>
                    <MikiriCard>Integration</MikiriCard>
                </div>
            </section>
        </div>
    </>
    )
}

export default Analytics    