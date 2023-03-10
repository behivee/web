import * as React from 'react'

import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'

import { MdWeb } from 'react-icons/md'

export type Link = {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'Estimator', href: '#' },
  {
    label: 'Services',
    children: [
      {
        label: 'Get Help',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Events & Meetups',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Industries',
    children: [
      {
        label: 'Get Help',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Events & Meetups',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Clients',
    children: [
      {
        label: 'Events & Meetups',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Blog',
    href: '#',
  },
  { label: 'About', href: '#' },
]
