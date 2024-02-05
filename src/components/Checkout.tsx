import { useReactTable,getCoreRowModel, flexRender } from '@tanstack/react-table'
import './Checkout.css'
import { UserCart } from './useQuery/API'
import { useEffect, useState } from 'react'

import { UserData } from './useQuery/API'
import { Button } from './styledComponents/Button'
function Checkout() {
    const { userData } = UserData()
    console.log(userData);
    

    const { cart,isCartSuccess } = UserCart()
    const [data, setData] = useState<any>([])
    
    useEffect(()=>{
        if (isCartSuccess) {
            setData(cart[0].products)
        }
    },[isCartSuccess,cart])

    const columns = [
        {
            accessorKey: 'title',
            header: 'Product',
            cell: (info: { getValue: () => any }) => <span>{info.getValue()}</span>
        },
        {
            accessorKey: 'price',
            header: 'Price',
            cell: (info: { getValue: () => any }) => <span>{info.getValue()}</span>
        },
        {
            accessorKey: 'quantity',
            header: 'Quantity',
            cell: (info: { getValue: () => any }) => <span>{info.getValue()}</span>
        },
        {
            accessorKey: 'total',
            header: 'Total',
            cell: (info: { getValue: () => any }) => <span>{info.getValue()}</span>
        },
    ]
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    })
    
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 p-5 mt-5 d-flex flex-column flex-md-row checkout justify-content-between '>
                    <div className='col-md-7 col-12 tableContainer'>
                        {table.getHeaderGroups().map((headerGroup: any) => {
                            
                            return <div className='HeaderRow col-12 justify-content-around p-2 d-flex' key={headerGroup.id}>
                                {headerGroup.headers.map((header: any) => {
                                    return <div key={header.id} className='tableHead'>{ header.column.columnDef.header}</div>
                                })}
                            </div>
                        })}
                        <div className='col-12 p-2 tableRow'>
                            {table?.getRowModel().rows.map((row: any) => {
                            return <div className=' col-12 d-flex my-3' key={row.id}>
                                {row.getVisibleCells().map((cell: any) => {
                                    
                                    return <div className='tableCell col-3 align-items-start d-flex justify-content-center ' key={cell.id}>
                                        {
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        }
                                    </div>
                                })}
                            </div>
                        })}
                        </div>
                </div>
                    <div className='col-md-4 col-12 mt-3 mt-md-0 cartTotal d-flex p-md-5 p-1 flex-column'>
                        <h4 className='col-12'>Cart Total</h4>
                        <div className='col-12 d-flex justify-content-between pb-2 subtotal'>
                            <span className='col-6'>Subtotal</span>
                            <span className='col-6'>${cart&&cart[0]?.total }</span>
                        </div>
                        <div className='col-12 mt-3 d-flex shipInfo'>
                            <div className='col-5'>Shipping</div>
                            <div className='col-7 d-flex flex-column userData'>
                                <div className='col-12 d-flex' >
                                    <span className='col-6'>First Name:</span>
                                    <span className='col-6'>{ userData?.firstName}</span>
                                </div>
                                <div className='col-12 d-flex' >
                                    <span className='col-6'>Last Name:</span>
                                    <span className='col-6'>{ userData?.lastName}</span>
                                </div>
                                <div className='col-12 d-flex' >
                                    <span className='col-6'>Phone:</span>
                                    <span className='col-6'>{ userData?.phone}</span>
                                </div>
                                <div className='col-12 d-flex' >
                                    <span className='col-6'>Address:</span>
                                    <span className='col-6'>{ userData?.address?.address}, {userData?.address?.city}</span>
                                </div>
                                <div className='col-12 d-flex' >
                                    <span className='col-6'>Currency:</span>
                                    <span className='col-6'>{ userData?.bank?.currency}</span>
                                </div>
                                
                            </div>
                        </div>
                        <Button background='black' color='white' backgroundhover='#717fe0' colorhover='white' className='col-12 mt-3'>Place Order</Button>
                </div>
                </div>
            </div>
    </div>
)
}

export default Checkout