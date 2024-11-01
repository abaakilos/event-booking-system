"use client"; // Add this line


import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function EventBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src='../images/placeholder.jpg'
            alt="Event background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
          >
            Book Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Unforgettable experiences await. Reserve your spot now!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Explore Events
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle>Event {index}</CardTitle>
                  <CardDescription>An amazing experience you don't want to miss!</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Event+${index}`}
                    alt={`Event ${index}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Book Your Event</h2>
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle>Event Booking</CardTitle>
              <CardDescription>Fill out the form below to reserve your spot</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="bg-gray-600 border-gray-500 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-600 border-gray-500 text-white" />
                </div>
                <div className="space-y-2">
                  <Label>Event</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-600 border-gray-500 text-white">
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="event1">Event 1</SelectItem>
                      <SelectItem value="event2">Event 2</SelectItem>
                      <SelectItem value="event3">Event 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-gray-500"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book Now</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}