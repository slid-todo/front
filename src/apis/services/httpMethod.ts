import axiosInstance from '@/lib/axiosInstance';

export async function GET<T>(url: string): Promise<T> {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function POST<T, U>(url: string, data?: U): Promise<T> {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function PUT<T, U>(url: string, data: U): Promise<T> {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function DELETE<T>(url: string): Promise<T> {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
