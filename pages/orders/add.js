
import styles from "../../styles/customers.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.addOrderItem(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="name">Item name</label>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   {...register('name',
                                       {required: true,
                                               message: 'please enter a name' })}
                                   placeholder="Enter item name"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="quantity"
                                   id="quantity"
                                   name="quantity"
                                   {...register('quantity',
                                       {required: true,
                                           message: 'please enter a quantity' })}
                                   placeholder="Enter quantity"/>
                        </div>


                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order;