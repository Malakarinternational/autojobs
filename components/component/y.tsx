/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Df5L7gR9Sjr
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function y() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-dvh bg-background dark:bg-muted">
      <header className="flex items-center h-16 px-4 border-b border-muted shrink-0 md:px-6 dark:border-muted-foreground/20">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-foreground dark:text-primary-foreground"
          prefetch={false}
        >
          <BriefcaseIcon className="w-6 h-6 text-primary dark:text-primary-foreground" />
          <span>Job Automation</span>
        </Link>
        <nav className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
          <Link href="#" className="font-bold text-foreground dark:text-primary-foreground" prefetch={false}>
            Dashboard
          </Link>
          <Link href="#" className="text-muted-foreground dark:text-muted-foreground" prefetch={false}>
            Find Jobs
          </Link>
          <Link href="#" className="text-muted-foreground dark:text-muted-foreground" prefetch={false}>
            Profile
          </Link>
          <Link href="#" className="text-muted-foreground dark:text-muted-foreground" prefetch={false}>
            Reports
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex text-foreground dark:text-primary-foreground dark:border-primary-foreground"
          >
            Sign In
          </Button>
          <Button size="sm" className="text-foreground dark:text-primary-foreground">
            Sign Up
          </Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 p-4 md:p-6">
        <div className="flex flex-col gap-6">
          <Card className="bg-background dark:bg-card dark:text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-card-foreground">Dashboard</CardTitle>
              <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                View your job application status and progress.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground dark:text-card-foreground">
                      Applications Submitted
                    </p>
                    <p className="text-2xl font-bold text-foreground dark:text-card-foreground">23</p>
                  </div>
                  <BriefcaseIcon className="w-8 h-8 text-muted-foreground dark:text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground dark:text-card-foreground">
                      Interviews Scheduled
                    </p>
                    <p className="text-2xl font-bold text-foreground dark:text-card-foreground">7</p>
                  </div>
                  <CalendarIcon className="w-8 h-8 text-muted-foreground dark:text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground dark:text-card-foreground">Offers Received</p>
                    <p className="text-2xl font-bold text-foreground dark:text-card-foreground">3</p>
                  </div>
                  <GiftIcon className="w-8 h-8 text-muted-foreground dark:text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background dark:bg-card dark:text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-card-foreground">Quick Actions</CardTitle>
              <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                Easily access common job search actions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30">
                  <SearchIcon className="w-5 h-5 mr-2 text-primary dark:text-primary-foreground" />
                  Search Jobs
                </Button>
                <Button
                  className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30"
                  onClick={() => setIsUploadModalOpen(true)}
                >
                  <UploadIcon className="w-5 h-5 mr-2 text-primary dark:text-primary-foreground" />
                  Upload Resume
                </Button>
                <Button className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30">
                  <CalendarIcon className="w-5 h-5 mr-2 text-primary dark:text-primary-foreground" />
                  Schedule Interview
                </Button>
                <Button className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-primary dark:text-primary-foreground" />
                  Track Applications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6">
          <Card className="bg-background dark:bg-card dark:text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-card-foreground">Recent Job Postings</CardTitle>
              <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                Browse the latest job opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="location" className="text-foreground dark:text-card-foreground">
                    Location
                  </Label>
                  <Select id="location" className="bg-background dark:bg-card-foreground dark:text-card-foreground">
                    <SelectTrigger className="bg-background dark:bg-card-foreground dark:text-card-foreground">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="bg-background dark:bg-card dark:text-card-foreground">
                      <SelectItem
                        value="san-francisco"
                        className="bg-background dark:bg-card dark:text-card-foreground"
                      >
                        San Francisco, CA
                      </SelectItem>
                      <SelectItem value="seattle" className="bg-background dark:bg-card dark:text-card-foreground">
                        Seattle, WA
                      </SelectItem>
                      <SelectItem value="new-york" className="bg-background dark:bg-card dark:text-card-foreground">
                        New York, NY
                      </SelectItem>
                      <SelectItem value="chicago" className="bg-background dark:bg-card dark:text-card-foreground">
                        Chicago, IL
                      </SelectItem>
                      <SelectItem value="los-angeles" className="bg-background dark:bg-card dark:text-card-foreground">
                        Los Angeles, CA
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Table className="bg-background dark:bg-card dark:text-card-foreground">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-foreground dark:text-card-foreground">Job Title</TableHead>
                      <TableHead className="text-foreground dark:text-card-foreground">Company</TableHead>
                      <TableHead className="text-foreground dark:text-card-foreground">Location</TableHead>
                      <TableHead className="text-foreground dark:text-card-foreground">Apply</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-foreground dark:text-card-foreground">
                        Software Engineer
                      </TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Acme Inc.</TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">San Francisco, CA</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30"
                        >
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-foreground dark:text-card-foreground">
                        Product Manager
                      </TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Globex Corporation</TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Seattle, WA</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30"
                        >
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-foreground dark:text-card-foreground">
                        UX Designer
                      </TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Stark Industries</TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">New York, NY</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30"
                        >
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-foreground dark:text-card-foreground">
                        Data Analyst
                      </TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Wayne Enterprises</TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Chicago, IL</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30"
                        >
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium text-foreground dark:text-card-foreground">
                        Marketing Coordinator
                      </TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Stark Industries</TableCell>
                      <TableCell className="text-foreground dark:text-card-foreground">Los Angeles, CA</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          className="text-foreground dark:text-card-foreground dark:bg-card-foreground/20 dark:hover:bg-card-foreground/30"
                        >
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background dark:bg-card dark:text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-card-foreground">Job Application Tracker</CardTitle>
              <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                Monitor the status of your job applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="bg-background dark:bg-card dark:text-card-foreground">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground dark:text-card-foreground">Job Title</TableHead>
                    <TableHead className="text-foreground dark:text-card-foreground">Company</TableHead>
                    <TableHead className="text-foreground dark:text-card-foreground">Status</TableHead>
                    <TableHead className="text-foreground dark:text-card-foreground">Applied On</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-foreground dark:text-card-foreground">
                      Software Engineer
                    </TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">Acme Inc.</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-foreground dark:text-card-foreground dark:border-card-foreground/50"
                      >
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">2023-04-15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-foreground dark:text-card-foreground">
                      Product Manager
                    </TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">Globex Corporation</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-foreground dark:text-card-foreground dark:border-card-foreground/50"
                      >
                        Interviewed
                      </Badge>
                    </TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">2023-05-01</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-foreground dark:text-card-foreground">UX Designer</TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">Stark Industries</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-foreground dark:text-card-foreground dark:border-card-foreground/50"
                      >
                        Offer Received
                      </Badge>
                    </TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">2023-06-10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-foreground dark:text-card-foreground">
                      Data Analyst
                    </TableCell>
                    <TableCell className="text-foreground dark:text-card-foreground">Wayne Enterprises</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-foreground dark:text-card-foreground dark:border-card-foreground/50"
                      >
                        Rejected
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
