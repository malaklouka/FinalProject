import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from '../spinneer'
import Message from './Message'
import { topbag } from '../../JS/actions/bag'

const Topbag = () => {
  const dispatch = useDispatch()

  const bagTop = useSelector((state) => state.bagReducer.bags)
  const isloading= useSelector((state) => state.bagReducer.isloading)
  const error= useSelector((state) => state.bagReducer.error)


  useEffect(() => {
    dispatch(topbag())
  }, [dispatch])

  return isloading ? (
    <Loader animation='grow' />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {bagTop && bagTop.map((bag) => (
        <Carousel.Item key={bag._id}>
          <Link to={`/bags/${bag._id}`}>
            <Image src={bag.image} alt={bag.namebag} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {bag.namebag} ($ {bag.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Topbag