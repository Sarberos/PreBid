import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {  QueryClientProvider } from '@tanstack/react-query'
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Provider} from 'react-redux'


export const  AppProvider=({store, queryClient, router})=>{
    return (
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <CustomProvider >
              <RouterProvider router={router}/>
              <ReactQueryDevtools initialIsOpen={false} />
            </CustomProvider>
          </QueryClientProvider>
        </Provider>
    )
}