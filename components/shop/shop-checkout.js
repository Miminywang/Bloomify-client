import { useState, useEffect } from 'react'
import { Image } from '@nextui-org/react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react'
import { Checkbox } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
// 小組元件
import { MyButton } from '@/components/btn/mybutton'
import Subtitle from '@/components/common/subtitle'
import { useAuth } from '@/hooks/use-auth'

const ShopCheckout = () => {
  const { auth } = useAuth()
  const [shopCartItems, setShopCartItems] = useState([])
  // console.log(shopCartItems)
  const [shopOrderDetails, setShopOrderDetails] = useState([])
  console.log(shopOrderDetails)
  const [detailData, setDetailData] = useState({
    products: [],
    detail: {},
  })

  // 購物車 start
  useEffect(() => {
    if (auth?.isAuth) {
      fetch('http://localhost:3005/api/products/get-cart-items', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            // 重新映射數據屬性，同时保留其他屬性
            const formattedProducts = data.data.map((product) => ({
              ...product,
              mainImage: product.image_url,
            }))
            setShopCartItems(formattedProducts)
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          console.error('Error fetching shop cart items:', error)
        )
    }
  }, [auth])

  //購買商品總數量
  let totalQuantity = shopCartItems.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  )
  // 購買商品小計
  let totalAmount = shopCartItems.reduce(
    (sum, item) => sum + Number(item.item_total),
    0
  )
  // 購物車 end

  // 填寫明細
  useEffect(() => {
    if (auth?.isAuth) {
      fetch('http://localhost:3005/api/products/get-order-list', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            // 重新映射數據屬性，同时保留其他屬性
            const formattedOrderList = data.data.map((orderList) => ({
              ...orderList,
              // mainImage: product.image_url,
            }))
            // console.log(formattedOrderList)
            setShopOrderDetails(formattedOrderList)
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          console.error('Error fetching shop cart items:', error)
        )
    }
  }, [auth])

  const getParsedData = (stringifiedJson) => {
    return stringifiedJson ? JSON.parse(stringifiedJson) : ''
  }

  const getDetailData = () => {
    const productList = getParsedData(localStorage.getItem('cartItems'))
    const filledOutDetail = getParsedData(
      localStorage.getItem('fillOutDetails')
    )
    const normalizedProductList = Object.values(productList)

    return {
      products: normalizedProductList,
      detail: filledOutDetail,
    }
  }

  useEffect(() => {
    const data = getDetailData() // fetch data
    setDetailData(data) // store data in useState
  }, []) // dependencies array 可以用來控制 要執行幾次getDetailData

  const confirmOrder = () => {
    // post api
  }

  const tableStylesContent = {
    th: ['text-base', 'text-tertiary-gray-100', 'font-normal'], // 表頭
    td: ['text-base', 'py-1', ''], // 表格 text-initial md:text-right
    wrapper: ['text-base', 'shadow-none', 'border-1', 'rounded-xl'], // 整個表格
  }
  const tableStyles = {
    base: ['text-tertiary-black'],
    th: ['text-base', 'text-tertiary-gray-100'], // 表頭
    td: ['text-base', 'px-3', 'py-3'], // 表格
    wrapper: [
      'text-base',
      'shadow-none',
      'border-1',
      'border-tertiary-100',
      'rounded-xl',
    ], // 整個表格
  }
  return (
    <div className="flex flex-col w-full lg:w-8/12 gap-14">
      {/* order-detail start */}
      <div className="flex flex-col w-full">
        <Subtitle text="購物明細" />
        {/* 明細 */}
        <div className="flex flex-col gap-3 mt-6 mb-4">
          <Table
            selectionMode="single"
            defaultSelectedKeys={['2']}
            aria-label="Example static collection table"
            classNames={{ ...tableStyles }}
          >
            <TableHeader>
              <TableColumn className="w-1/2 md:w-1/3 lg:w-1/4 bg-primary-300">
                商品
              </TableColumn>
              <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                單價
              </TableColumn>
              <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                數量
              </TableColumn>
              <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                小計
              </TableColumn>
            </TableHeader>
            <TableBody>
              {Object.values(shopCartItems).map((item) => {
                let imageUrl =
                  `/assets/shop/products/${item.directory}/${item.mainImage}` ||
                  `/assets/shop/products/default_fallback_image.jpg`
                return (
                  <TableRow key={item.cart_item_id}>
                    <TableCell>
                      <div className="sm:flex sm:flex-row sm:items-center sm:space-x-6">
                        <Image
                          src={imageUrl}
                          alt=""
                          className="hidden sm:block md:w-24 md:h-24 mx-auto rounded-md md:rounded-xl"
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="text-tertiary-gray-100">
                            {item.store_name}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>NT${item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>NT${item.item_total}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
        {/* 小計 */}
        <div>
          <Table
            hideHeader
            aria-label="Example static collection table"
            classNames={{ ...tableStylesContent }}
          >
            <TableHeader>
              <TableColumn>無</TableColumn>
              <TableColumn>無</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell></TableCell>
                <TableCell className="text-nowrap">
                  共 {shopCartItems.length} 項商品，數量 {totalQuantity} 個
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="w-full pr-8">小計</TableCell>
                <TableCell className="text-right">NT${totalAmount}</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="w-full pr-8">運費</TableCell>
                <TableCell className="text-right">NT$??</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="w-full pr-8">折扣</TableCell>
                <TableCell className="text-right">NT$??</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell className="w-full pr-8">總計</TableCell>
                <TableCell className="text-right text-lg font-medium">
                  NT$???
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      {/* order-detail end */}
      {/* shipping & payment detail start*/}
      <div className="flex flex-col justify-center w-full gap-6">
        <Subtitle text="配送/付款明細" />
        {shopOrderDetails.map((detail) => {
          return (
            <Table
              key={detail.id}
              hideHeader
              aria-label="Example static collection table"
              classNames={{ ...tableStylesContent }}
            >
              {detail.recipient_address}
              <TableHeader>
                <TableColumn>配送方式</TableColumn>
                <TableColumn>內容</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className="pr-8 text-nowrap">配送方式</TableCell>
                  <TableCell className="w-full text-right">
                    {detail.shipping_name}
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell className="pr-8 text-nowrap">配送地址</TableCell>
                  <TableCell className="w-full text-right line-clamp-1">
                    {detail.recipient_address}
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell className="pr-8 text-nowrap">收件人</TableCell>
                  <TableCell className="w-full text-right">
                    {detail.recipient_name}
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className="pr-8 text-nowrap">連絡電話</TableCell>
                  <TableCell className="w-full text-right">
                    {detail.recipient_phone}
                  </TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className="pr-8 text-nowrap">付款方式</TableCell>
                  <TableCell className="w-full text-right">
                    {detail.payment_name}
                  </TableCell>
                </TableRow>
                <TableRow key="6">
                  <TableCell className="pr-8 text-nowrap">發票</TableCell>
                  <TableCell className="w-full text-right">
                    {detail.invoice_name}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )
        })}
      </div>
      {/* shipping & payment detail end*/}
      <div className="w-full flex justify-center">
        <Checkbox defaultSelected>
          我同意辦理退貨時，由floral_shop代為處理發票及銷貨退回證明單，以加速退貨退款作業。
        </Checkbox>
      </div>

      <div className="w-full gap-2 flex justify-center sm:gap-4 ">
        <Link href="/cart/fill-out">
          <MyButton color="primary" size="xl" isOutline>
            上一步
          </MyButton>
        </Link>
        <Link href="/cart/payment-successful" className="text-white">
          <MyButton color="primary" size="xl">
            確認，進行付款
          </MyButton>
        </Link>
      </div>
    </div>
  )
}

export default ShopCheckout
