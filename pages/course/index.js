import { useState } from 'react'
import DefaultLayout from '@/components/layout/default-layout'
import { Image } from '@nextui-org/react'
import CardGroup from '@/components/course/card-group'
import { Card, CardHeader, CardBody, CardFooter, Link } from '@nextui-org/react'

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import Subtitle from '@/components/course/subtitle'

export default function CourseIndex() {
  const [activePage, setActivePage] = useState('course')
  const underlines = ['none']
  return (
    <DefaultLayout
      activePage={activePage}
      className="flex flex-col justify-center items-center"
    >
      {/* 置中 & 背景色 */}
      <main className="flex flex-col justify-center items-center bg-white">
        {/* 主要容器 */}
        <div className="bg-white container justify-center flex flex-col items-start columns-12 static">
          {/* 麵包屑 */}
          <div className="bg-white flex flex-col flex-wrap gap-4 py-6 w-full">
            {underlines.map((u) => (
              <div key={u}>
                <Breadcrumbs underline={u}>
                  <BreadcrumbItem>首頁</BreadcrumbItem>
                  <BreadcrumbItem color="primary">合作課程</BreadcrumbItem>
                </Breadcrumbs>
              </div>
            ))}
          </div>

          {/* banner圖 & 加入我們 */}
          <div className="relative w-full">
            {/* banner圖 */}
            <Image
              alt="課程首頁banner圖"
              src="/assets/course/img_course_banner.png"
              className="rounded-2xl"
            />
            {/* 加入我們 */}
            <Card className="flex flex-row p-6 columns-2 m-4 md:m-10 absolute top-0 left-0 z-40 rounded-lg">
              <CardBody className="p-0">
                <div className="flex flex-col gap-2 items-start justify-between ">
                  <p>與我們一起提供優質的線下課程，讓更多人愛上花藝</p>
                  <Link
                    href="/pages/join"
                    className="text-primary-100 mb-1 border-b-1 border-primary-100"
                  >
                    加入我們
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* 卡片群組 */}
          <div className="grid gap-y-4 my-14 w-full">
            <Subtitle text="最新課程" />
            <CardGroup />
          </div>
          <div className="grid gap-y-4 my-14 w-full">
            <Subtitle text="熱銷課程" />
            <CardGroup />
          </div>
          <div className="grid gap-y-4 my-14 w-full">
            <Subtitle text="精選商家" />
            <CardGroup />
          </div>
          <div className="grid gap-y-4 my-14 w-full">
            <Subtitle text="四大分類" />
            <CardGroup />
          </div>
          <div className="grid gap-y-4 my-14 w-full">
            <Subtitle text="為您推薦" />
            <CardGroup />
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}
