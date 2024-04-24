import { useQuery } from "@tanstack/react-query";

const useCart = (email) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:4000/carts?email=user.email`);
      return response.json();
    },
  });
};

export default useCart;
