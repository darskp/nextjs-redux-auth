"use server"

import { signIn, signOut } from "@/auth";


export const fetchAllProducts = async () => {
    try {
        const result = await fetch('https://dummyjson.com/products', {
            method: "GET",
            cache: "no-store"
        })
        const data = await result.json();

        return {
            success: true,
            data: data?.products
        }

    } catch (err) {
        return {
            success: false,
            message: "Some error occured! Please try again",
        };
    }
}

export const fetchProductById = async (Id) => {
    try {
        const result = await fetch(`https://dummyjson.com/product/${Id}`, {
            method: "GET",
            cache: "no-store"
        })
        const data = await result.json();
        return data;
    } catch (err) {
        return {
            success: false,
            message: "Some error occured! Please try again",
        };
    }
}

export async function loginAction() {
  await signIn("github");
}

export async function logoutAction() {
  await signOut();
}