import React, { useState } from "react";
import styles from "./Expenses.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import { ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import optionIcon from "../../assets/png/menuIcon.png";
// import cartIcon from "../../assets/svg/cartIcon.svg";
// import transportIcon from "../../assets/svg/transportIcon.svg";
// import houseIcon from "../../assets/svg/houseIcon.svg";
import boxes from "../../assets/png/boxes.png";
import plant from "../../assets/png/plant.png";
import {
	data,
	todayExpenses,
	previousExpenses,
	spendCategories,
} from "../../dummyData";

export default function Expenses() {
	const [activeIndex, setActiveIndex] = useState(0);

	const onMouseOver = (data: any, index: number) => setActiveIndex(index);

	return (
		<>
			<main className={styles.expenses}>
				<div className={styles.expensesCard}>
					{/* Expense Overview Section */}

					<section className={styles.expensesOverview}>
						<div className={styles.expensesHeader}>
							<p className={styles.expensesTitle}>Expenses</p>
							<div className={styles.expensesActions}>
								<div className={styles.personImages}>
									<img
										src={personOne}
										alt="person one"
										className={styles.personOne}
									/>
									<img
										src={personTwo}
										alt="person two"
										className={styles.personTwo}
									/>
									<img
										src={personThree}
										alt="person three"
										className={styles.personThree}
									/>
								</div>
								<button>
									<img className={styles.addIcon} src={addIcon} alt="add" />
								</button>
							</div>
						</div>
						<p className={styles.dateRange}>01 - 25 March, 2020</p>
						<ResponsiveContainer width="100%" height="20%">
							<BarChart data={data}>
								<Bar
									dataKey="uv"
									fill="rgba(21, 122, 255, .2)"
									onMouseOver={onMouseOver}
								>
									{data.map((entry, index) => (
										<Cell
											cursor="pointer"
											fill={
												index === activeIndex
													? "rgb(21, 122, 255)"
													: "rgba(21, 122, 255, 0.2)"
											}
											key={index}
										/>
									))}
								</Bar>
							</BarChart>
						</ResponsiveContainer>
						<div className={styles.expensesOverviewHeader}>
							<p className={styles.expensesOverviewTitle}>Today</p>
							<button>
								<img
									className={styles.expenseOption}
									src={optionIcon}
									alt="option"
								/>
							</button>
						</div>
						<ul>
							{todayExpenses.map((expense) => (
								<li className={styles.expenseItem} key={expense.id}>
									<div className={styles.expenseItemLeft}>
										<div
											style={{ background: expense.iconBackgroundColor }}
											className={styles.expenseItemDiv}
										>
											<img src={expense.icon} alt={expense.expense} />
										</div>
										<div className={styles.expenseItemDetails}>
											<p className={styles.expenseItemTitle}>
												{expense.expense}
											</p>
											<p className={styles.expenseItemTime}>
												{" "}
												{expense.time} • {expense.location}{" "}
											</p>
										</div>
									</div>
									<p className={styles.expenseItemPrice}>
										{expense.price.toFixed(2)}
									</p>
								</li>
							))}
						</ul>
						<div className={styles.expensesOverviewHeader}>
							<p className={styles.expensesOverviewTitle}>
								Thursday October, 2022
							</p>
							<button>
								<img
									className={styles.expenseOption}
									src={optionIcon}
									alt="options"
								/>
							</button>
						</div>
						<ul>
							{previousExpenses.map((expense) => (
								<li className={styles.expenseItem} key={expense.id}>
									<div className={styles.expenseItemLeft}>
										<div
											style={{ background: expense.iconBackgroundColor }}
											className={styles.expenseItemDiv}
										>
											<img src={expense.icon} alt={expense.expense} />
										</div>
										<div className={styles.expenseItemDetails}>
											<p className={styles.expenseItemTitle}>
												{expense.expense}
											</p>
											<p className={styles.expenseItemTime}>
												{" "}
												{expense.time} • {expense.location}{" "}
											</p>
										</div>
									</div>
									<p className={styles.expenseItemPrice}>
										{expense.price.toFixed(2)}
									</p>
								</li>
							))}
						</ul>
					</section>

					{/* Money Spent Analysis Section */}

					<section className={styles.moneyOverview}>
						<p className={styles.moneyOverviewTitle}>
							Where did your money go?
						</p>
						<ul>
							{spendCategories.map((category) => (
								<li key={category.id}>
									<div className={styles.spendCategory}>
										<p className={styles.spendCategoryName}>
											{" "}
											{category.category}
										</p>
										<p className={styles.spendCategoryPrice}>
											{category.price.toFixed(2)}
										</p>
									</div>
									<div className={styles.spendCategoryBar}>
										<div
											style={{
												width: `${
													(category.price /
														spendCategories.reduce(
															(acc, category) => acc + category.price,
															0
														)) *
													100
												}%`,
											}}
											className={styles.spendCategoryColoredBar}
										></div>
									</div>
								</li>
							))}
						</ul>

						<div className={styles.saveMoneyDiv}>
							<img src={boxes} alt="boxes" className={styles.boxes} />
							<img src={plant} alt="plant" className={styles.plant} />
							<p className={styles.saveMoneyTitle}>Save more money?</p>
							<p className={styles.saveMoneyInfo}>
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim.
							</p>
							<button className={styles.button} type="button">
								VIEW TIPS
							</button>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
