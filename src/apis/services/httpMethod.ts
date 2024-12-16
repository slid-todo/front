import axiosInstance from '@/lib/axiosInstance';

export async function GET<T>(url: string): Promise<T> {
  return (await axiosInstance.get(url)).data;
}

export async function POST<T, U>(url: string, data: U): Promise<T> {
  return (await axiosInstance.post(url, data)).data;
}

export async function PUT<T, U>(url: string, data: U): Promise<T> {
  return (await axiosInstance.put(url, data)).data;
}

export async function DELETE<T>(url: string): Promise<T> {
  return (await axiosInstance.delete(url)).data;
}
